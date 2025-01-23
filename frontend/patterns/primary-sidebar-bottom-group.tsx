import { HelpCircleIcon } from "@fe/icons/help-circle-icon";
import { LogOutIcon } from "@fe/icons/log-out-icon";
import { AvatarImage } from "@fe/components/avatar";
import { NormalToLargeButton } from "@fe/components/button";
import { NavigationGroup } from "@fe/components/sidebar/navigation-groups";
import { SidebarRegularItem } from "@fe/components/sidebar/navigation-items";
import { Tooltip } from "@fe/components/tooltip";

export const PrimarySidebarBottomGroup = () => {
  return (
    <NavigationGroup
      divider="top"
      data-component="014144c8-67bf-40c7-beec-d22938c29a65"
    >
      <SidebarRegularItem
        href="#"
        before={
          <HelpCircleIcon
            className="w-8 h-8 sm:w-6 sm:h-6"
            data-component="52651c2e-25a9-406b-aebe-5ca28728c7b0"
          />
        }
        data-component="162cbffb-645d-4100-bc27-05b9eee3b839"
      >
        Help
      </SidebarRegularItem>
      <SidebarRegularItem
        before={
          <AvatarImage
            className="w-8 h-8 sm:w-6 sm:h-6 shrink-0 rounded-full"
            src="https://images.unsplash.com/photo-1694239400333-0051c92d420f?q=80&w=128&h=128&auto=format&fit=crop"
            alt="Sheera.Gottstein"
            data-component="344f4c1d-3496-41ed-9622-1f6f4dc80770"
          />
        }
        after={
          <Tooltip
            text="Log out"
            position="right"
            data-component="642430e9-96fc-4cff-8a09-946b032d76b0"
          >
            <NormalToLargeButton
              appearance="text"
              className="w-14 sm:w-10"
              title="Log out"
              data-component="ab602b51-1072-455c-af04-0209140af9b9"
            >
              <LogOutIcon
                className="w-10 h-10 sm:w-5 sm:h-5 shrink-0"
                data-component="e49cca4b-820d-494c-8351-22d2291e33e4"
              />
            </NormalToLargeButton>
          </Tooltip>
        }
        data-component="cde12d68-108f-4a0a-a439-dd03bd59b17e"
      >
        Sheera Gottstein
      </SidebarRegularItem>
    </NavigationGroup>
  );
};
