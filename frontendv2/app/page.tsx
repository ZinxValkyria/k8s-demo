import AuthCtx from "@/components/auth/Session";
import Avatar from "@/components/auth/Avatar";
import SignIn from "@/components/auth/signIn";
import UserBox from "@/components/auth/UserBox";
import PostBox from "@/components/posts/PostBox";
import PostArray from "@/components/posts/PostArray";

export default function Home() {
  return (
    <>
    <AuthCtx>
      <UserBox />
    </AuthCtx>
    <div className="flex w-full mt-12 justify-center">
      <div className="lg:w-1/2 md:w-4/6 w-full px-8">
      <PostBox />
      <div className="divider">Your Feed</div>
      <PostArray />
      </div>
    </div>
    </>
  )
}
