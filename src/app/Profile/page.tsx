"use client"
import { useSearchParams } from "next/navigation";

export default function Profile() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    console.log(id);
    
    return (
        <></>
    );
}