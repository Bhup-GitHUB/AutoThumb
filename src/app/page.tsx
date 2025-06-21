"use client";

import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <main>
      <div>
        <Button
          onClick={() => alert("just clicked the button")}
          variant="destructive"
        >
          click me
        </Button>
      </div>
    </main>
  );
}
