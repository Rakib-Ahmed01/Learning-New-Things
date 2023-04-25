import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Todos from './components/Todos';

function App() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            <p>There was an error!</p>
            <button onClick={() => resetErrorBoundary()}>Try again</button>
          </div>
        )}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <Todos />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
