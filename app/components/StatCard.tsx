type StatCardProps = {
  title: string;
  value: number;
};

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div
      className="
     bg-gradient-to-br
from-white
to-slate-50
      p-6
      rounded-2xl
      shadow-xl
border
border-slate-100
      hover:shadow-xl
      hover:scale-105
      transition-all
      duration-300
      "
    >
      <h3 className="text-gray-500 text-sm font-medium">
        {title}
      </h3>

      <p className="text-4xl font-bold text-slate-800 mt-3">
        {value}
      </p>
    </div>
  );
}