import {
  ColumnDef,
  createSolidTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/solid-table";
import { createSignal, For, Suspense, VoidComponent } from "solid-js";
import CorbasLoading from "./corbas.loading";

const defaultColumns: ColumnDef<Person>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "visits",
    header: "Visits",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
  },
];

type CorbasPersonTableProps = {
  data: Person[] | undefined;
};

const CorbasPersonTable: VoidComponent<CorbasPersonTableProps> = (props) => {
  const table = createSolidTable({
    get data() {
      return props.data || [];
    },
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div class="not-prose relative overflow-hidden rounded-xl bg-white/30 leading-5 shadow-xl shadow-black/5 ring-1  ring-slate-200">
        <div class="relative overflow-auto rounded-xl">
          <div class="my-8 overflow-hidden">
            <Suspense fallback={<CorbasLoading />}>
              <table class="w-full table-auto border-collapse text-sm">
                <thead>
                  <For each={table.getHeaderGroups()}>
                    {(headerGroup) => (
                      <tr>
                        <For each={headerGroup.headers}>
                          {(header) => (
                            <th class="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-900">
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                            </th>
                          )}
                        </For>
                      </tr>
                    )}
                  </For>
                </thead>
                <tbody class="bg-slate-200/30">
                  <For each={table.getRowModel().rows}>
                    {(row) => (
                      <tr>
                        <For each={row.getVisibleCells()}>
                          {(cell) => (
                            <td class="border-b border-slate-100 p-4 pl-8 text-slate-700">
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          )}
                        </For>
                      </tr>
                    )}
                  </For>
                </tbody>
              </table>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorbasPersonTable;
