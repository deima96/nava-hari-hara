"use client";

interface BrochureModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function BrochureModal({
  open,
  onClose,
  onSubmit,
}: BrochureModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-black/40 hover:text-black"
        >
          ×
        </button>

        <h3 className="mb-2 text-2xl font-semibold">Download Brochure</h3>

        <p className="mb-6 text-sm text-black/60">
          Register below to access the brochure PDF.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-primary"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-primary"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-primary"
          />

          <label className="flex items-start gap-3 text-xs leading-relaxed text-black/70">
            <input type="checkbox" required className="mt-1 accent-primary" />

            <span>
              I authorize to be contacted via phone/SMS/WhatsApp/email or any
              other related modes, overriding my DND status.
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#832626] py-3 text-white transition-all hover:bg-[#9e3333]"
          >
            Register & Download
          </button>
        </form>
      </div>
    </div>
  );
}
