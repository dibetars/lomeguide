import { NextResponse } from 'next/server'

const DESTINATION =
  'https://rentals.black-horse.io/go/techinghana/other?c=2026'

export function GET() {
  return NextResponse.redirect(DESTINATION, 302)
}
