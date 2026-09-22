import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/app/components/layout/SiteLayout";
import { RouteError } from "@/app/components/shared/RouteError";
import { HomePage } from "@/app/pages/HomePage";

const DonatePage = lazy(() => import("@/app/pages/DonatePage").then((m) => ({ default: m.DonatePage })));
const NewsPage = lazy(() => import("@/app/pages/NewsPage").then((m) => ({ default: m.NewsPage })));
const EventsPage = lazy(() => import("@/app/pages/EventsPage").then((m) => ({ default: m.EventsPage })));
const CommunityPage = lazy(() => import("@/app/pages/CommunityPage").then((m) => ({ default: m.CommunityPage })));
const DiocesesPage = lazy(() => import("@/app/pages/DiocesesPage").then((m) => ({ default: m.DiocesesPage })));
const PrayersPage = lazy(() => import("@/app/pages/PrayersPage").then((m) => ({ default: m.PrayersPage })));
const PlaceholderPage = lazy(() => import("@/app/pages/PlaceholderPage").then((m) => ({ default: m.PlaceholderPage })));
const MediathequePage = lazy(() => import("@/app/pages/mediatheque"));

function PageLoader() {
  return <div className="min-h-[40vh] bg-background" aria-hidden="true" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Routes>
        <Route element={<SiteLayout />} errorElement={<RouteError />}>
          <Route index element={<HomePage />} />
          <Route
            path="don"
            element={
              <Suspense fallback={<PageLoader />}>
                <DonatePage />
              </Suspense>
            }
          />
          <Route
            path="actualites"
            element={
              <Suspense fallback={<PageLoader />}>
                <NewsPage />
              </Suspense>
            }
          />
          <Route
            path="evenements"
            element={
              <Suspense fallback={<PageLoader />}>
                <EventsPage />
              </Suspense>
            }
          />
          <Route
            path="communaute"
            element={
              <Suspense fallback={<PageLoader />}>
                <CommunityPage />
              </Suspense>
            }
          />
          <Route
            path="dioceses"
            element={
              <Suspense fallback={<PageLoader />}>
                <DiocesesPage />
              </Suspense>
            }
          />
          <Route
            path="prieres"
            element={
              <Suspense fallback={<PageLoader />}>
                <PrayersPage />
              </Suspense>
            }
          />
          <Route
            path="blog"
            element={
              <Suspense fallback={<PageLoader />}>
                <PlaceholderPage title="Blog & Magazine" subtitle="Articles et témoignages - bientôt disponible." />
              </Suspense>
            }
          />
          <Route
            path="mediatheque"
            element={
              <Suspense fallback={<PageLoader />}>
                <MediathequePage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <PlaceholderPage title="Contact" subtitle="Formulaire et coordonnées — bientôt disponible." />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
