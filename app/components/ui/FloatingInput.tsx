type FloatingInputProps = {
  label: string;
  type?: string;
  name: string;
  id: string;
  colSpan?: "full" | "half";
};

export default function FloatingInput({
  label,
  type = "text",
  name,
  id,
  colSpan = "half",
}: FloatingInputProps) {
  return (
    <div className={`relative ${colSpan === "full" ? "md:col-span-2" : ""}`}>
      <input
        className="w-full border-0 border-b border-primary/20 bg-transparent py-4 px-0 focus:ring-0 focus:border-primary focus:outline-none peer transition-colors font-body text-body-md"
        id={id}
        name={name}
        placeholder=" "
        type={type}
      />
      <label
        className="absolute left-0 top-4 font-label text-label-caps text-on-surface-variant/50 pointer-events-none transition-all duration-200 peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-primary"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
