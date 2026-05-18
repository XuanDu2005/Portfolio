import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold text-foreground">
        Trang không tồn tại
      </h1>
      <p className="mt-3 max-w-md text-muted">
        Đường dẫn bạn truy cập không có trong hệ thống.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/" variant="primary">
          Về trang chủ
        </Button>
        <Link
          href="/#projects"
          className="inline-flex items-center rounded-lg border border-white/20 px-5 py-2.5 text-sm text-muted transition-colors hover:text-accent"
        >
          Xem dự án
        </Link>
      </div>
    </div>
  );
}
