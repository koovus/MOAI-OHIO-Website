import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
             <h1 className="text-2xl font-bold text-gray-900">This page isn't here.</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
             The link may have changed, but your next idea still has a place to start.
          </p>
           <a className="mt-6 inline-block text-sm font-semibold underline" href={import.meta.env.BASE_URL}>
             Explore moaiohio
           </a>
        </CardContent>
      </Card>
    </div>
  );
}
