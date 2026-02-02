interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBox({ value, onChange }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search notes..."
    />
  );
}
