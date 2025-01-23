import { PrimarySidebar } from "@fe/components/sidebar/sidebar-layouts";

import { PrimarySidebarBottomGroup } from "@fe/patterns/primary-sidebar-bottom-group";
import { PrimarySidebarCreateButton } from "@fe/patterns/primary-sidebar-create-button";
import { PrimarySidebarHeading } from "@fe/patterns/primary-sidebar-heading";
import { PrimarySidebarPrimaryGroup } from "@fe/patterns/primary-sidebar-primary-group";
import { PrimarySidebarSecondaryGroup } from "@fe/patterns/primary-sidebar-secondary-group";

export const FixedWidthPrimarySidebar = () => {
  return (
    <PrimarySidebar data-component="ae8569b5-104e-4765-a14b-c2f46119c83f">
      <PrimarySidebarHeading data-component="0ee07287-012c-4446-83ba-4a6c11efe148" />

      <PrimarySidebarCreateButton data-component="d5c53b81-40dc-4f3a-a80c-764bbad94dd9" />

      <PrimarySidebarPrimaryGroup data-component="89adbf49-defb-41f4-bd8e-e68ea3ea32fa" />

      <PrimarySidebarSecondaryGroup data-component="fc251793-cb85-43ab-a516-7d37618d91e8" />

      <div
        className="flex-grow"
        data-component="518854bc-d10b-4e65-97eb-2edf6a55cf17"
      />

      <PrimarySidebarBottomGroup data-component="5ef71be4-d6a5-4d6c-9671-48c818103be5" />
    </PrimarySidebar>
  );
};
