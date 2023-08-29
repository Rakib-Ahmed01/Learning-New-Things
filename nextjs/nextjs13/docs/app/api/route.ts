import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  console.log(new URL(request.url));
  return NextResponse.json(
    { message: 'First Api Route', request },
    { status: 200 }
  );
}
