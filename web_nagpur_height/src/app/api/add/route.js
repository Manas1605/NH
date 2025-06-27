import { NextResponse } from 'next/server';

export async function POST(request) {
    let data = await request.json();
    console.log("getting data - route.js", data);
    return NextResponse.json({ success: true, data });
}

export function GET(request){
    const users = [
        {
            name: "Durgesh D",
            phone: "9358566486",
            loc: "Nagpur"
        },
        {
            name: "Rajesh D",
            phone: "9358566486",
            loc: "Nagpur"
        },
        {
            name: "Shailesh P",
            phone: "9359251636",
            loc: "Nagpur"
        }
    ]
    return NextResponse.json(users)
}