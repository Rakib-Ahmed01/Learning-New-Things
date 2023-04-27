import { useInfiniteQuery } from '@tanstack/react-query';
import axiosInstance from '../utils/axios';

export default function InfiniteQueries() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['todos'],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await axiosInstance(`/todos?_limit=5&_page=${pageParam}`);
      return {
        data: res.data,
        nextCursor:
          res.data[res.data.length - 1].id < 20 ? pageParam + 1 : null,
      };
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor;
    },
  });

  if (isError) {
    return <div>There was an error fetching todos</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <button
          onClick={fetchNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
          style={{ display: 'block', margin: 'auto' }}
        >
          {isFetchingNextPage
            ? 'Loading...'
            : hasNextPage
            ? 'Load more'
            : 'Nothing more to load'}
        </button>
        <p>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</p>
      </div>
      <pre>
        {JSON.stringify(
          data.pages?.map((page) => page.data),
          null,
          5
        )}
      </pre>
    </div>
  );
}

// function Projects() {
//   const fetchProjects = ({ pageParam = 0 }) =>
//     fetch('/api/projects?cursor=' + pageParam)

//   const {
//     data,
//     error,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//     isFetchingNextPage,
//     status,
//   } = useInfiniteQuery('projects', fetchProjects, {
//     getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
//   })

//   return status === 'loading' ? (
//     <p>Loading...</p>
//   ) : status === 'error' ? (
//     <p>Error: {error.message}</p>
//   ) : (
//     <>
//       {data.pages.map((group, i) => (
//         <React.Fragment key={i}>
//           {group.projects.map(project => (
//             <p key={project.id}>{project.name}</p>
//           ))}
//         </React.Fragment>
//       ))}
//       <div>
//         <button
//           onClick={() => fetchNextPage()}
//           disabled={!hasNextPage || isFetchingNextPage}
//         >
//           {isFetchingNextPage
//             ? 'Loading more...'
//             : hasNextPage
//             ? 'Load More'
//             : 'Nothing more to load'}
//         </button>
//       </div>
//       <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
//     </>
//   )
// }
