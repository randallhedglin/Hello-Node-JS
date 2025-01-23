import { ClipboardIcon } from "@fe/icons/clipboard-icon";
import { DashboardIcon } from "@fe/icons/dashboard-icon";
import { FileIcon } from "@fe/icons/file-icon";
import { HomeIcon } from "@fe/icons/home-icon";
import { InboxIcon } from "@fe/icons/inbox-icon";
import { PercentageIcon } from "@fe/icons/percentage-icon";
import { SettingsIcon } from "@fe/icons/settings-icon";
import { Badge } from "@fe/components/badge";
import {
  CollapsibleSubgroupRight,
  NavigationGroup,
} from "@fe/components/sidebar/navigation-groups";
import { SidebarRegularItem } from "@fe/components/sidebar/navigation-items";

export const PrimarySidebarPrimaryGroup = ({ ...props }) => {
  return (
    <NavigationGroup
      header="general"
      data-component="491eb56d-b3a8-4e99-8b57-b409a006310e"
      {...props}
    >
      <SidebarRegularItem
        href="#"
        before={
          <HomeIcon
            className="w-8 h-8 sm:w-6 sm:h-6"
            data-component="b1f1247e-decd-48a9-a8eb-487c142744ec"
          />
        }
        data-component="4f58a91d-3c65-4a14-91d5-fccde0a01a15"
      >
        Home
      </SidebarRegularItem>
      <SidebarRegularItem
        href="#"
        before={
          <InboxIcon
            className="w-8 h-8 sm:w-6 sm:h-6"
            data-component="3f28bd8f-f694-455a-9b03-eaa76c3c7b39"
          />
        }
        after={
          <Badge
            text="24"
            size="small"
            data-component="b7adc382-664f-45f4-8206-9b7a739d49bb"
          />
        }
        data-component="54c967d0-6e4d-4b44-b9c2-350fc68b25c4"
      >
        Inbox
      </SidebarRegularItem>
      <SidebarRegularItem
        href="#"
        before={
          <PercentageIcon
            className="w-8 h-8 sm:w-6 sm:h-6"
            data-component="c3d688be-0300-4a3e-9c7d-693c91ebea77"
          />
        }
        data-component="6f878dfe-0a27-41b2-a2c9-4f8fa1ffc8f9"
      >
        Reporting
      </SidebarRegularItem>
      <SidebarRegularItem
        href="#"
        before={
          <DashboardIcon
            className="w-8 h-8 sm:w-6 sm:h-6"
            data-component="378dedb2-c931-466a-8adc-fbd99c030d5e"
          />
        }
        data-component="cad374f5-4b49-4065-bc15-b5f93818686e"
      >
        Dashboard
      </SidebarRegularItem>
      <CollapsibleSubgroupRight
        text="Tasks"
        icon={
          <ClipboardIcon
            className="w-8 h-8 sm:w-6 sm:h-6"
            data-component="71d64c83-bcd3-4c55-b7ca-dcf0ddda4878"
          />
        }
        data-component="053a1d45-c5ab-48e5-b815-289510447629"
      >
        <SidebarRegularItem
          href="#"
          className="pl-12"
          after={
            <Badge
              text="1"
              size="small"
              data-component="80995dc4-8976-403d-928f-0bca6d8f4d72"
            />
          }
          data-component="1faf3650-cfe8-4104-b6e2-b7a810c762c0"
        >
          Todo
        </SidebarRegularItem>
        <SidebarRegularItem
          href="#"
          className="pl-12"
          after={
            <Badge
              text="11"
              size="small"
              data-component="5bd5d64a-1687-4bfc-8a2e-65719a4d680d"
            />
          }
          data-component="9916bccc-4b34-4086-a6d1-c5527e62caf5"
        >
          In progress
        </SidebarRegularItem>
        <SidebarRegularItem
          href="#"
          className="pl-12"
          after={
            <Badge
              text="56"
              size="small"
              data-component="296c7efe-3d38-46d7-b7df-67b78cb5ce5a"
            />
          }
          data-component="f56057a9-5736-4476-b9a3-066197dd877e"
        >
          Done
        </SidebarRegularItem>
      </CollapsibleSubgroupRight>
      <SidebarRegularItem
        href="#"
        before={
          <FileIcon
            className="w-8 h-8 sm:w-6 sm:h-6"
            data-component="6b56a18a-a49d-407c-a7b2-954d5eca6f64"
          />
        }
        data-component="3d853396-4718-40af-94f2-df439f3d5ee7"
      >
        Documents
      </SidebarRegularItem>
      <SidebarRegularItem
        href="#"
        isActive
        before={
          <SettingsIcon
            className="w-8 h-8 sm:w-6 sm:h-6"
            data-component="4517a2ca-e607-4ec7-8b09-91a8e40d518f"
          />
        }
        data-component="1d97b121-8412-4e35-ad1f-2811a0ce3d04"
      >
        Settings
      </SidebarRegularItem>
    </NavigationGroup>
  );
};
