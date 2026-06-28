import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-ice-blue">
      <div className="max-w-[600px] mx-auto px-[30px] text-center flex flex-col gap-8">
        <h1 className="font-heading text-[120px] lg:text-[160px] leading-none text-navy-blue">404</h1>
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-[32px] text-carbon-black">Page not found</h2>
          <p className="font-body text-[18px] leading-[1.6] text-steel-gray">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button label="Go home" href="/" variant="primary" />
          <Button label="Contact us" href="/contact" variant="outlined" />
        </div>
      </div>
    </section>
  );
}
