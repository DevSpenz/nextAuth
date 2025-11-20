'use client';

import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import router from 'next/router';

const Page = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

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
            <CardTitle className={"text-2xl font-bold"}>Login</CardTitle>
            <CardDescription className={"text-muted-foreground text-lg"}>
              Enter your credentials to access your account
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
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  {error}
                </div>
              )}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
          <div className="mt-4 space-y-2 text-center text-sm">
            <Link
              href="/forgot-password"
              className="text-primary hover:underline"
            >
              Forgot your password?
            </Link>
            <div>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </Card>
      </div>
    );
}
export default Page
