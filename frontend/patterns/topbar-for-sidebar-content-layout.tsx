import React from "react";

import { DotsVerticalIcon } from "@fe/icons/dots-vertical-icon";
import { DownloadIcon } from "@fe/icons/download-icon";
import { PlusIcon } from "@fe/icons/plus-icon";
import { SearchIcon } from "@fe/icons/search-icon";
import { Button, NormalToLargeButton } from "@fe/components/button";
import { Drawer } from "@fe/components/drawer";
import { InputWithIconsNormalToLarge } from "@fe/components/input/input-with-icons";
import { WideToggleLarge } from "@fe/components/toggle";

export const TopbarForSidebarContentLayout = () => {
  return (
    <div
      className="lg:bg-blinkNeutral50 lg:dark:bg-blinkNeutral800"
      data-component="32e1b787-3d8a-49cc-9daa-d9eb5137a3a6"
    >
      <nav
        aria-label="Main Navigation"
        className="h-auto lg:h-16 px-6 flex items-center justify-between absolute top-3 lg:top-0 right-0 lg:right-0 left-12 lg:left-0 lg:relative"
        data-component="b9f13b7b-2017-4778-bfbd-af9dbd05d5fd"
      >
        <div
          className="text-2xl blink-text-primary italic font-blink-title"
          data-component="5a01ca2e-7c89-47ce-b8bf-9106ca01d86f"
        >
          <a href="#" data-component="df9e54aa-3271-49a2-850c-3fbc67bcfe4c">
            My Dashboards
          </a>
        </div>
        <div
          className="gap-3 hidden lg:flex"
          data-component="d4047d16-fd0d-4ec1-b1d9-fb15d24eb229"
        >
          <InputWithIconsNormalToLarge
            placeholder="Search..."
            before={
              <SearchIcon
                className="w-6 h-6 lg:w-4 lg:h-4"
                data-component="8f354a89-3906-45d3-a022-7d087c18f3b7"
              />
            }
            data-component="dfda693a-8b9f-4597-ba1b-2a7892889b85"
          />
          <Button
            appearance="secondary"
            after={
              <PlusIcon
                className="w-6 h-6 lg:w-4 lg:h-4"
                data-component="395c9085-572d-4f53-8eb8-2087948e5adc"
              />
            }
            data-component="44cb82f5-7745-4e22-a184-1657adbdc730"
          >
            Add widget
          </Button>
          <div className="flex gap-2 items-center">
            <WideToggleLarge id="larger-toggle2" defaultChecked />

            <label className="Label" htmlFor="larger-toggle2">
              Light
            </label>
          </div>
        </div>
        <div
          className="block lg:hidden"
          data-component="ac55849f-5c4f-408a-a3de-60c96129ebdb"
        >
          <Drawer
            position="right"
            trigger={
              <Button
                appearance="text"
                className="w-12 h-12 lg:w-10 lg:h-10"
                data-component="d1552a45-fe9a-47eb-ab9b-d8cec8a6c4bf"
              >
                <DotsVerticalIcon
                  className="w-8 h-8 lg:w-6 lg:h-6 shrink-0"
                  data-component="34ebcc9f-067c-4843-86d3-c6c0cb8915ff"
                />
              </Button>
            }
            data-component="6d356b97-6a62-4935-b8e8-1669ce8ad346"
          >
            <div
              className="p-8 flex flex-col gap-3"
              data-component="76c45fe1-9750-4b23-a53f-3a4319215335"
            >
              <InputWithIconsNormalToLarge
                placeholder="Search..."
                before={
                  <SearchIcon
                    className="w-6 h-6 lg:w-4 lg:h-4"
                    data-component="61639adc-a678-4a6d-a166-936a7522866b"
                  />
                }
                data-component="612a9c07-eedb-474a-96d9-80caa67e3e35"
              />

              <NormalToLargeButton
                appearance="secondary"
                after={
                  <DownloadIcon
                    className="w-6 h-6 lg:w-4 lg:h-4"
                    data-component="5ab8b412-4dda-4c35-be11-1f9badbb8134"
                  />
                }
                data-component="881516c8-1042-4ea7-a887-74625df5c7c9"
              >
                Download
              </NormalToLargeButton>
              <NormalToLargeButton
                appearance="primary"
                after={
                  <PlusIcon
                    className="w-6 h-6 lg:w-4 lg:h-4"
                    data-component="78d530a8-d95f-4274-8f80-97d17ff2e454"
                  />
                }
                data-component="c6752ffb-2038-4123-aea5-405d855ca72b"
              >
                Create
              </NormalToLargeButton>
            </div>
          </Drawer>
        </div>
      </nav>
    </div>
  );
};
