export default function BlogPosts() {
  return (
    <div className="*:px-16">
      <header className="py-4 sticky flex flex-row items-center gap-4 top-0 left-0 w-full z-50 backdrop-blur-md border-b border-neutral-900">
        <div className="py-2.5 px-4 min-w-40 rounded-md bg-neutral-900 text-neutral-400 text-sm">
          All Blogs
        </div>
        <input
          type="text"
          placeholder="Search"
          className="py-2 px-4 grow rounded-md bg-neutral-900"
        />
        <div className="py-2.5 px-4 min-w-48 rounded-md bg-neutral-900 text-neutral-400 text-sm">
          Sort by Last Edited
        </div>
        <div className="py-2.5 px-4 rounded-md bg-neutral-900 text-neutral-400 text-sm">
          Filter / Sort
        </div>
      </header>

      {/* Pagination */}
      <div className="mt-8 flex flex-row gap-4 *:px-16">
        <div>Status</div>
        <div>Blog Slug</div>
        <div className="grow">Blog Name</div>
        <div>Category</div>
        <div>Published</div>
        <div>Last Edited</div>
      </div>
    </div>
  );
}
