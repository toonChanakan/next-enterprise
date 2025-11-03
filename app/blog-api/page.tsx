import { Card, CardTitle, CardDescription } from "@/components/components/ui/card"

export default async function Page() {
  const data = await fetch('http://localhost:3000/../api/blog-data')
  const blockItem: any = await data.json()
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6">
        <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {blockItem.items.map((subItem: any) => (
              <ul className="flex-col items-center justify-center text-center" key={subItem.id}>
                <Card>
                  <CardTitle>
                    {subItem.title}
                  </CardTitle>
                  <CardDescription>
                    {subItem.description}
                  </CardDescription>
                </Card>
              </ul>
            ))}
        </div>
      </div>
    </section>
  )
}