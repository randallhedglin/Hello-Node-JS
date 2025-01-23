import { BellIcon } from "@fe/icons/bell-icon";
import { ProductLogo } from "@fe/icons/logos/product-logo";
import { Badge } from "@fe/components/badge";
import { Button } from "@fe/components/button";
import { SidebarHeading } from "@fe/components/sidebar/navigation-items";
import { Tooltip } from "@fe/components/tooltip";

export const PrimarySidebarHeading = () => {
  return (
    <SidebarHeading
      before={
        <ProductLogo
          className="w-8 h-8"
          data-component="152da28d-2522-4a32-b235-d76d321f5616"
        />
      }
      after={
        <Tooltip
          text="Notifications"
          position="right"
          data-component="86eea931-25ef-4e18-88e6-ba27c9421c59"
        >
          <Button
            appearance="text"
            className="px-0 w-16 sm:w-8 h-16 sm:h-8 relative"
            data-component="7c9df748-1e06-41d7-87d4-8f0d4708b6c2"
          >
            <Badge
              size="xsmall"
              className="absolute top-4 right-4 sm:top-1 sm:right-1.5"
              data-component="27b80595-9e70-4c01-84b1-457d7a7a2cf5"
            />

            <BellIcon
              className="w-8 h-8 sm:w-6 sm:h-6"
              data-component="aa46b604-6c90-44e9-881d-856d4ee8959b"
            />
          </Button>
        </Tooltip>
      }
      data-component="e0106a12-0424-48a4-bd4a-aed826802132"
    >
      <span
        className="font-medium text-xl"
        data-component="258071c9-3e60-4bd0-bbcb-c682c660e3c0"
      >
        Settings
      </span>
    </SidebarHeading>
  );
};

export const PrimarySidebarHeading2 = () => {
  return (
    <SidebarHeading
      className="lg:pr-8"
      before={
        <ProductLogo
          className="w-8 h-8"
          data-component="91976e25-f9d4-4da4-bce4-6d940025e270"
        />
      }
      after={
        <Tooltip
          text="Notifications"
          position="right"
          data-component="ea5b0b11-f395-47ae-b918-202e7e7f6660"
        >
          <Button
            appearance="text"
            className="px-0 w-16 sm:w-8 h-16 sm:h-8 relative"
            data-component="52d46cc5-7d95-48ff-81fa-e34e122b7882"
          >
            <Badge
              size="xsmall"
              className="absolute top-4 right-4 sm:top-1 sm:right-1.5"
              data-component="bfc3c602-dd9c-48ba-ab19-633ebaf20313"
            />

            <BellIcon
              className="w-8 h-8 sm:w-6 sm:h-6"
              data-component="060e897a-869d-4c12-9360-24d2ec88048e"
            />
          </Button>
        </Tooltip>
      }
      data-component="210832c2-da4e-4f21-955c-b04a1b5e050a"
    >
      <span
        className="font-medium text-xl"
        data-component="03d352de-d269-49f0-9d24-7125373dbc12"
      >
        Settings
      </span>
    </SidebarHeading>
  );
};
