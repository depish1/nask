import { ReactNode, Suspense } from "react";

import { Loader } from "Components/SharedComponents/Loader";

interface ISuspensePageProps {
  page: ReactNode;
}

export const SuspensePage = ({ page }: ISuspensePageProps) => <Suspense fallback={<Loader />}>{page}</Suspense>;
