import { Badge } from "@fe/components/badge";
import {
  CollapsibleSubgroupLeft,
  NavigationGroup,
} from "@fe/components/sidebar/navigation-groups";
import { SidebarRegularItem } from "@fe/components/sidebar/navigation-items";

export const PrimarySidebarSecondaryGroup = () => {
  return (
    <NavigationGroup
      header="Your teams"
      data-component="30580cb6-78fb-434b-9f2b-b7d8e96ebece"
    >
      <CollapsibleSubgroupLeft
        text="First team"
        data-component="f0852928-c85f-4f56-a887-96aa28769f61"
      >
        <SidebarRegularItem
          className="pl-12"
          href="#"
          after={
            <Badge
              text="24"
              size="small"
              data-component="8d5f9ae3-b965-4c1e-8995-d41f985d1260"
            />
          }
          data-component="7660bf0f-2a8a-4604-8da3-e503c07a7155"
        >
          Stories
        </SidebarRegularItem>
        <SidebarRegularItem
          className="pl-12"
          href="#"
          after={
            <Badge
              text="11"
              size="small"
              data-component="759fdd3d-e415-4bd0-a739-87e13ea65c06"
            />
          }
          data-component="7a42a50e-b6f9-4bf2-bd12-2029889ca451"
        >
          Tasks
        </SidebarRegularItem>
        <SidebarRegularItem
          className="pl-12"
          href="#"
          data-component="36b6bf5a-707b-4e48-80f5-1e75eb01ad97"
        >
          Resources
        </SidebarRegularItem>
      </CollapsibleSubgroupLeft>

      <CollapsibleSubgroupLeft
        text="Second team"
        data-component="c5b9198d-2345-4368-963e-2e9e42d6dd53"
      >
        <SidebarRegularItem
          className="pl-12"
          href="#"
          data-component="93175cbd-aad0-44cd-82cd-f5d31be6f200"
        >
          Stories
        </SidebarRegularItem>
        <SidebarRegularItem
          className="pl-12"
          href="#"
          data-component="7149b6e0-92f4-4211-9926-71c3bec94cc2"
        >
          Tasks
        </SidebarRegularItem>
        <SidebarRegularItem
          className="pl-12"
          href="#"
          after={
            <Badge
              text="42"
              size="small"
              data-component="9a5f2e0f-f045-4c7f-bcc3-cfe4f8e1ed3a"
            />
          }
          data-component="8a6528ac-fbec-4ac6-8ab8-6c190f77bbb7"
        >
          Resources
        </SidebarRegularItem>
      </CollapsibleSubgroupLeft>
    </NavigationGroup>
  );
};
