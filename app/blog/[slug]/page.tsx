import { LP_GRID_ITEMS } from "../../../lp-items"

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
   const { slug } = await(params)

  const item = LP_GRID_ITEMS.find(i => (i.title.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9-\s-]/g, '')) === (slug))

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="flex flex-col items-center justify-center text-center">
                <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex size-10 items-center justify-center rounded-full p-1.5 text-blue-700 lg:size-12">
                  {item.icon}
                </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
              </div>
    </div>
  )
}
