import { EditIcon } from "@fe/icons/edit-icon";
import { NormalToLargeButton } from "@fe/components/button";

export const PrimarySidebarCreateButton = () => {
  return (
    <NormalToLargeButton
      appearance="secondary"
      before={
        <EditIcon
          className="w-6 h-6 sm:w-4 sm:h-4"
          data-component="690945a9-a6f1-481b-a93c-198ca741640b"
        />
      }
      data-component="1047d373-53e3-4e68-9030-5d781be2b530"
    >
      <span
        className="group-data-[sidebar-open=false]:hidden"
        data-component="516e7f29-7a70-4211-b55e-194b1906d370"
      >
        Create
      </span>
    </NormalToLargeButton>
  );
};
