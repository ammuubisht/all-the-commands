import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Blog() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-32">
        ATC Blog
      </h1>
      <section className="w-2/4">
        <Card className="cursor-pointer border-x-0 border-t-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">
              How Linux Improves it&apos;s service?
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* <div className="text-2xl font-bold">$45,231.89</div> */}
            <p className="text-base text-muted-foreground">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              adipisci in? Autem unde explicabo tenetur. Necessitatibus
              architecto perferendis temporibus soluta corporis quod repellendus
              inventore, exercitationem reprehenderit impedit earum praesentium
              eum.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
