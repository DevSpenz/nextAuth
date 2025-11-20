"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "next-auth/react";
import router from "next/router";

const forgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  //  const handleSubmit = async (e: React.FormEvent) => {
  //    e.preventDefault();
  //    setError("");
  //    setLoading(true);

  //    try {
  //      const result = await signIn.email({
  //        email,
  //        password,
  //      });
  //      if (result.error) {
  //        setError(result.error.message || "Signin failed");
  //      } else {
  //        router.push("/dashboard");
  //      }
  //    } catch (err) {
  //      setError("An error occurred during signin");
  //      console.error(err);
  //    } finally {
  //      setLoading(false);
  //    }
  //  };

  const handleSubmit = async () => ({});

  return (
    <div
      className={
        "flex min-h-screen items-center justify-center mx-auto bg-background p-4"
      }
    >
      <Card className={"w-full max-w-md"}>
        <CardHeader>
          <CardTitle className={"text-2xl font-bold"}>
            Forgot Password
          </CardTitle>
          <CardDescription className={"text-muted-foreground text-lg"}>
            Enter your email to receive a password reset link
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {error && (
              <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </Button>
            <Button asChild variant={"outline"} className="w-full bg-muted">
              <Link href={"/login"}>Back to Login</Link>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default forgotPasswordPage;
