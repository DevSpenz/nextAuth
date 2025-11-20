import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
    return (
        <div className="flex min-h-screen items-center justify-center mx-auto">
            <div className={"flex flex-col items-center justify-center gap-4 p-6 max-w-md w-full"}>
                <h1 className="text-4xl font-bold">Better Auth Tutorial</h1>
                <p className="text-lg text-center text-muted-foreground mb-6">Learn how to implement forgot password functionality</p>
                <Button asChild variant={"default"} size={"lg"} className={"w-full"} >
                    <Link href={"/login"}>Login</Link>
                </Button>
                <Button asChild variant={"outline"} size={"lg"} className={"w-full bg-muted"}>
                    <Link href={"/signup"}>Sign Up</Link>
                </Button>
                <Button asChild variant={"outline"} size={"lg"} className={"w-full bg-muted"}>
                    <Link href={"/dashboard"}>Dashboard(protected)</Link>
                </Button>
            </div>
        </div>
    )
}
export default Page
