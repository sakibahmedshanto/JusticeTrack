import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

interface HomeProps {
  onNavigate: (screen: string) => void;
}

export const Home = ({ onNavigate }: HomeProps): JSX.Element => {
  // Case status items
  const caseStatuses = ["Filed", "Under Investigation"];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex flex-col items-center relative bg-[#f7f9fc]">
        <main className="items-start justify-center px-40 py-5 flex-1 grow flex relative self-stretch w-full">
          <div className="flex flex-col max-w-[960px] w-[960px] h-[695px] items-start px-0 py-5 relative">
            <div className="flex flex-col pt-5 pb-3 px-4 self-stretch w-full items-center relative flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] font-sans font-bold text-[#0c141c] text-[28px] text-center tracking-[0] leading-[35px]">
                Welcome to JusticeTrack
              </h2>
            </div>

            <div className="flex-col pt-1 pb-3 px-4 self-stretch w-full flex-[0_0_auto] flex items-center relative">
              <p className="relative self-stretch mt-[-1.00px] font-sans font-normal text-[#0c141c] text-base text-center tracking-[0] leading-6">
                File a new case or track an existing one.
              </p>
            </div>

            <div className="flex items-start justify-center px-4 py-3 relative self-stretch w-full flex-[0_0_auto]">
              <Button 
                onClick={() => onNavigate('file-case')}
                className="min-w-[84px] max-w-[480px] h-10 px-4 py-0 bg-[#0c7ff2] text-[#f7f9fc] font-sans font-bold text-sm"
              >
                File a New Case
              </Button>
            </div>

            <div className="inline-flex flex-wrap max-w-[480px] items-end gap-[16px_16px] px-4 py-3 relative flex-[0_0_auto]">
              <div className="flex flex-col min-w-40 items-start relative flex-1 grow">
                <Input
                  className="h-14 p-[15px] self-stretch w-full bg-[#f7f9fc] rounded-lg border border-solid border-[#cedbe8] font-sans font-normal text-[#49729b] text-base"
                  placeholder="Enter  Case Hash"
                />
              </div>
            </div>

            <div className="flex items-start justify-center px-4 py-3 relative self-stretch w-full flex-[0_0_auto]">
              <Button
                onClick={() => onNavigate('track-case')}
                variant="secondary"
                className="min-w-[84px] max-w-[480px] h-10 px-4 py-0 bg-[#e8edf4] text-[#0c141c] font-sans font-bold text-sm"
              >
                Track Case Status
              </Button>
            </div>

            <div className="flex flex-col items-start pt-4 pb-2 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] font-sans font-bold text-[#0c141c] text-lg tracking-[0] leading-[23px]">
                Case Status
              </h3>
            </div>

            <Card className="border-none shadow-none w-full">
              <CardContent className="p-0">
                {caseStatuses.map((status, index) => (
                  <div
                    key={index}
                    className="flex h-14 items-center gap-4 px-4 py-0 relative self-stretch w-full bg-[#f7f9fc]"
                  >
                    <div className="flex flex-col items-start relative flex-1 grow">
                      <p className="relative self-stretch mt-[-1.00px] font-sans font-normal text-[#0c141c] text-base tracking-[0] leading-6">
                        {status}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};
