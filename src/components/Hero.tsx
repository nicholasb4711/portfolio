import Image from 'next/image';

export default function Hero() {
  return (
    <div className="text-[#60a5fa]">
      <Image
        className="sqD w-16 absolute top-20 right-[20%] opacity-80 animate-float-doodle"
        style={{ animationDelay: "0s" }}
        src="/static/logos/hero/react.svg"
        alt="React"
        width={64}
        height={64}
      />
      <Image
        className="sqD w-12 absolute top-40 right-[10%] animate-float-doodle"
        style={{ animationDelay: "0.2s" }}
        src="/static/logos/hero/nextjs.svg"
        alt="Next.js"
        width={48}
        height={48}
      />
      <Image
        className="sqD w-16 absolute bottom-20 left-[15%] animate-float-doodle"
        style={{ animationDelay: "0.4s" }}
        src="/static/logos/hero/typescript.svg"
        alt="TypeScript"
        width={56}
        height={56}
      />
      <Image
        className="sqD w-14 absolute top-32 left-[20%] animate-float-doodle"
        style={{ animationDelay: "0.6s" }}
        src="/static/logos/hero/tailwind.svg"
        alt="Tailwind CSS"
        width={48}
        height={48}
      />
      <Image
        className="sqD w-12 absolute bottom-40 right-[25%] animate-float-doodle"
        style={{ animationDelay: "0.8s" }}
        src="/static/logos/hero/javascript.svg"
        alt="JavaScript"
        width={48}
        height={48}
      />
      <Image
        className="sqD w-16 absolute bottom-12 right-[15%] animate-float-doodle"
        style={{ animationDelay: "1s" }}
        src="/static/logos/hero/node.svg"
        alt="Node.js"
        width={64}
        height={64}
      />
      <Image
        className="sqD w-12 absolute top-60 left-[20%] animate-float-doodle"
        style={{ animationDelay: "1.2s" }}
        src="/static/logos/hero/python.svg"
        alt="Python"
        width={48}
        height={48}
      />
      <Image
        className="sqD w-10 absolute bottom-32 left-[40%] animate-float-doodle"
        style={{ animationDelay: "1.4s" }}
        src="/static/logos/hero/git.svg"
        alt="Git"
        width={40}
        height={40}
      />
      <Image
        className="sqD w-12 absolute top-28 right-[35%] animate-float-doodle"
        style={{ animationDelay: "1.6s" }}
        src="/static/logos/hero/vscode.svg"
        alt="VS Code"
        width={48}
        height={48}
      />
      <Image
        className="sqD w-10 absolute bottom-24 right-[40%] animate-float-doodle"
        style={{ animationDelay: "1.8s" }}
        src="/static/logos/hero/github.svg"
        alt="GitHub"
        width={40}
        height={40}
      />
    </div>
  );
}
