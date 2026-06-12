import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, mobile, message } = body

    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const sql = neon(process.env.DATABASE_URL!)
    
    const result = await sql(
      'INSERT INTO contacts (name, email, mobile, message) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, email, mobile, message]
    )

    return NextResponse.json(
      { success: true, id: result[0].id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    )
  }
}
