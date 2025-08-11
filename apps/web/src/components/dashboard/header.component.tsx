export default function DashboardHeaderComponent(props: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">{props.title}</h1>
      <p className="text-muted-foreground text-base sm:text-lg">
        {props.description}
      </p>
    </div>
  );
}
