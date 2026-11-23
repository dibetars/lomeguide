#!/usr/bin/env python3
"""Generate a Black Horse–styled QR code (white modules, cyan finder centers).

Encodes https://lomeguide.vercel.app/go/techinghana which redirects to the
Black Horse rentals deep link.
"""

from __future__ import annotations

from pathlib import Path

import qrcode
from PIL import Image, ImageDraw, ImageFont
from qrcode.constants import ERROR_CORRECT_H

URL = "https://lomeguide.vercel.app/go/techinghana"
OUT = Path(__file__).resolve().parents[1] / "public" / "qr" / "techinghana-black-horse.png"

NAVY = (11, 20, 40, 255)  # #0B1428
WHITE = (255, 255, 255, 255)
CYAN = (92, 220, 255, 255)  # #5CDCFF
TOP_TEXT = "Rent. Ride. Arrive"
BOTTOM_TEXT = "black-horse.io"

MODULE = 26
PAD = 64
TOP_BAND = 100
BOTTOM_BAND = 100


def in_finder(row: int, col: int, n: int) -> bool:
    return (
        (row < 7 and col < 7)
        or (row < 7 and col >= n - 7)
        or (row >= n - 7 and col < 7)
    )


def main() -> None:
    qr = qrcode.QRCode(
        version=None,
        error_correction=ERROR_CORRECT_H,
        box_size=1,
        border=0,
    )
    qr.add_data(URL)
    qr.make(fit=True)
    matrix = qr.get_matrix()
    n = len(matrix)

    qr_px = n * MODULE
    width = qr_px + PAD * 2
    height = qr_px + TOP_BAND + BOTTOM_BAND
    img = Image.new("RGBA", (width, height), NAVY)
    draw = ImageDraw.Draw(img)

    ox, oy = PAD, TOP_BAND
    inset = MODULE * 0.08
    radius = MODULE * 0.22

    for r in range(n):
        for c in range(n):
            if not matrix[r][c] or in_finder(r, c, n):
                continue
            x0 = ox + c * MODULE + inset
            y0 = oy + r * MODULE + inset
            x1 = ox + (c + 1) * MODULE - inset
            y1 = oy + (r + 1) * MODULE - inset
            draw.rounded_rectangle((x0, y0, x1, y1), radius=radius, fill=WHITE)

    for fr, fc in ((0, 0), (0, n - 7), (n - 7, 0)):
        x = ox + fc * MODULE
        y = oy + fr * MODULE
        draw.rounded_rectangle(
            (
                x + MODULE * 0.12,
                y + MODULE * 0.12,
                x + 7 * MODULE - MODULE * 0.12,
                y + 7 * MODULE - MODULE * 0.12,
            ),
            radius=MODULE * 0.9,
            fill=WHITE,
        )
        draw.rounded_rectangle(
            (
                x + 1 * MODULE + MODULE * 0.05,
                y + 1 * MODULE + MODULE * 0.05,
                x + 6 * MODULE - MODULE * 0.05,
                y + 6 * MODULE - MODULE * 0.05,
            ),
            radius=MODULE * 0.65,
            fill=NAVY,
        )
        draw.rounded_rectangle(
            (
                x + 2 * MODULE + MODULE * 0.1,
                y + 2 * MODULE + MODULE * 0.1,
                x + 5 * MODULE - MODULE * 0.1,
                y + 5 * MODULE - MODULE * 0.1,
            ),
            radius=MODULE * 0.45,
            fill=CYAN,
        )

    try:
        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 34)
        font_sm = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 30)
    except OSError:
        try:
            font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 34)
            font_sm = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 30)
        except OSError:
            font = ImageFont.load_default()
            font_sm = font

    def center_text(text: str, y: int, f) -> None:
        bbox = draw.textbbox((0, 0), text, font=f)
        tw = bbox[2] - bbox[0]
        draw.text(((width - tw) / 2, y), text, font=f, fill=CYAN)

    center_text(TOP_TEXT, 32, font)
    center_text(BOTTOM_TEXT, height - 64, font_sm)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(OUT, "PNG", optimize=True)
    print(f"Wrote {OUT}")
    print(f"Encodes: {URL}")


if __name__ == "__main__":
    main()
