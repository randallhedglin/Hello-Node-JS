import { FixedWidthPrimarySidebar } from "@fe/patterns/fixed-width-primary-sidebar";
import { TopbarForSidebarContentLayout } from "@fe/patterns/topbar-for-sidebar-content-layout";
import { Card, CardContent } from "@fe/components/card/simple-card";
import { EyeIcon } from "@fe/icons/eye-icon";
import { DollarIcon } from "@fe/icons/dollar-icon";
import { PillLightCoral, PillLightGreen } from "@fe/components/pill/colorful";
import { DotsVerticalIcon } from "@fe/icons/dots-vertical-icon";
import { Button } from "@fe/components/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@fe/components/table";

export const DashboardPage = () => {
  return (
    <div
      className="blink-text-primary flex flex-col lg:flex-row h-screen bg-blinkGray50 dark:bg-blinkNeutral900 gap-0.5"
      data-component="e3c86360-08d9-41f4-8e7e-436c07bfe1d7"
    >
      <FixedWidthPrimarySidebar data-component="e3a3292b-a577-4c3d-9bcb-61907253f839" />

      <div
        className="flex flex-1 h-full flex-col"
        data-component="366db611-2672-46d3-9d7b-8a64cb2fe6da"
      >
        <TopbarForSidebarContentLayout data-component="154d0a30-01c4-470b-9d88-075e381947fc" />

        <div
          className="w-full h-full flex flex-col lg:flex-row"
          data-component="597a5162-5e9a-4ca6-9cc4-4650169b5291"
        >
          <div
            className="flex flex-1 h-full overflow-y-auto flex-col p-6 gap-6"
            data-component="d7c9e7ee-2dcf-4f88-ac64-f099a024f2ba"
          >
            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              <Card role="region" aria-labelledby="text-card-icon-action-title">
                <CardContent>
                  <div className="blink-surface-light p-2 rounded-full inline-block">
                    <EyeIcon className="w-8 h-8 rounded-full" />
                  </div>
                  <h3
                    id="text-card-icon-action-title"
                    className="text-xl blink-text-primary my-2"
                  >
                    32 567{" "}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm blink-text-subdued">
                      Views last month
                    </p>
                    <PillLightGreen className="h-6 inline-flex items-center gap-2">
                      10% ↑
                    </PillLightGreen>
                  </div>
                </CardContent>
              </Card>

              <Card role="region" aria-labelledby="text-card-icon-action-title">
                <CardContent>
                  <div className="blink-surface-light p-2 rounded-full inline-block">
                    <EyeIcon className="w-8 h-8 rounded-full" />
                  </div>
                  <h3
                    id="text-card-icon-action-title"
                    className="text-xl blink-text-primary my-2"
                  >
                    11 334{" "}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm blink-text-subdued">
                      Views last 7 days
                    </p>
                    <PillLightGreen className="h-6 inline-flex items-center gap-2">
                      23% ↑
                    </PillLightGreen>
                  </div>
                </CardContent>
              </Card>

              <Card role="region" aria-labelledby="text-card-icon-action-title">
                <CardContent>
                  <div className="blink-surface-light p-2 rounded-full inline-block">
                    <DollarIcon className="w-8 h-8 rounded-full" />
                  </div>
                  <h3
                    id="text-card-icon-action-title"
                    className="text-xl blink-text-primary my-2"
                  >
                    11 035
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm blink-text-subdued">
                      Revenue last year
                    </p>
                    <PillLightCoral className="h-6 inline-flex items-center gap-2">
                      12% ↓
                    </PillLightCoral>
                  </div>
                </CardContent>
              </Card>

              <Card role="region" aria-labelledby="text-card-icon-action-title">
                <CardContent>
                  <div className="blink-surface-light p-2 rounded-full inline-block">
                    <DollarIcon className="w-8 h-8 rounded-full" />
                  </div>
                  <h3
                    id="text-card-icon-action-title"
                    className="text-xl blink-text-primary my-2"
                  >
                    800
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm blink-text-subdued">
                      Revenue last month
                    </p>
                    <PillLightCoral className="h-6 inline-flex items-center gap-2">
                      6% ↓
                    </PillLightCoral>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="blink-surface-default border blink-border-container-white rounded-lg p-4">
              <h3 className="text-xl bold pb-6 px-2">
                Website statistics last three month
              </h3>
              <div
                className="w-full overflow-auto"
                data-component="5d334faa-bf6e-42db-888d-3885857d004a"
              >
                <Table
                  className="min-w-[44rem]"
                  data-component="69f841dd-7915-4448-814b-08bc1ae4e0f3"
                >
                  <TableHead data-component="d4299e79-d94f-452e-a94d-ec08ffe006a7">
                    <TableRow data-component="7873f1d1-2f09-492e-8a99-bb5a8dd18754">
                      <TableHeadCell data-component="29e3c1c2-a071-422e-a258-f75828e07401">
                        Source
                      </TableHeadCell>
                      <TableHeadCell data-component="74c6e271-dd19-41c5-8cb5-0ba1cb4c4243">
                        Visitors
                      </TableHeadCell>
                      <TableHeadCell data-component="1935402a-a712-432f-8fc6-1fd45a0dce14">
                        Revenue
                      </TableHeadCell>
                      <TableHeadCell data-component="088fb284-00f3-4a4e-8200-ef2f71ce3648">
                        Status
                      </TableHeadCell>
                      <TableHeadCell data-component="6d0514e9-f08c-4743-82ac-5cf842667a2d">
                        Action
                      </TableHeadCell>
                    </TableRow>
                  </TableHead>
                  <TableBody data-component="752e46d7-b6c9-4246-be53-1c6ac1f8ee56">
                    <TableRow data-component="3c1d7afa-6532-4e29-bef4-15332a5bfab0">
                      <TableCell data-component="ddaed030-1828-42fd-9b4f-69460ec44e40">
                        Unknown
                      </TableCell>
                      <TableCell data-component="945a7fcb-a3ff-425f-9f74-df9a762e6925">
                        11 355
                      </TableCell>
                      <TableCell data-component="0bda67e9-4cd0-40f1-bd6f-d05d55748f46">
                        2,123 $
                      </TableCell>
                      <TableCell data-component="8f300c99-20c7-442a-b27b-b420a01208c2">
                        <PillLightGreen className="h-6 inline-flex items-center gap-2">
                          23% ↑
                        </PillLightGreen>
                      </TableCell>
                      <TableCell data-component="ac1bf6a5-fa15-44bf-b82c-1e4ea7df5b2e">
                        <Button
                          appearance="text"
                          className="w-10"
                          data-component="8886e46f-2f34-4853-bb02-1054f677c333"
                        >
                          <DotsVerticalIcon
                            className="w-8 h-8 shrink-0"
                            data-component="38959f6f-1162-4f6e-810e-26618fabb69e"
                          />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow data-component="5e6adb81-1a63-43e1-a1b2-c986ee9478f7">
                      <TableCell data-component="48c18630-fed5-4380-81f2-7ccfedda5d67">
                        Google search
                      </TableCell>
                      <TableCell data-component="788fee8d-6cf5-4104-8e23-02d1a7063078">
                        4 235
                      </TableCell>
                      <TableCell data-component="82302cc8-8d10-4044-811f-d79183088354">
                        999 $
                      </TableCell>
                      <TableCell data-component="9a9846a2-dbf0-449d-8071-01d7a59b2e18">
                        <PillLightGreen className="h-6 inline-flex items-center gap-2">
                          3% ↑
                        </PillLightGreen>
                      </TableCell>
                      <TableCell data-component="60167e3a-dab5-4886-8fd0-a660748acf09">
                        <Button
                          appearance="text"
                          className="w-10"
                          data-component="c9ba518e-d2d6-4d79-a309-befb61b1627b"
                        >
                          <DotsVerticalIcon
                            className="w-8 h-8 shrink-0"
                            data-component="7c2d68a4-05b9-4957-b7e5-347754e7e5b6"
                          />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow data-component="199fc190-4c75-46ba-a478-458e6e487148">
                      <TableCell data-component="28a2e6d1-363e-4fc8-ac4b-557557c98c6f">
                        Google ads
                      </TableCell>
                      <TableCell data-component="290609fb-3cca-4eff-a3e5-2a5bdd703fbb">
                        4 560
                      </TableCell>
                      <TableCell data-component="fee6aaf2-5cb4-4df3-abf1-78472116dfc0">
                        884 $
                      </TableCell>
                      <TableCell data-component="ed696946-352d-4ef6-a930-f7661932f295">
                        <PillLightCoral className="h-6 inline-flex items-center gap-2">
                          6% ↓
                        </PillLightCoral>
                      </TableCell>
                      <TableCell data-component="7c70b90e-88d8-4931-884e-5a50fa311881">
                        <Button
                          appearance="text"
                          className="w-10"
                          data-component="53723383-bb98-4256-83f6-c61716b4b341"
                        >
                          <DotsVerticalIcon
                            className="w-8 h-8 shrink-0"
                            data-component="233ba511-90c7-480b-b610-cc762f5c6aa7"
                          />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
