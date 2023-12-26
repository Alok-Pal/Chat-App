import { Button } from "@cred/neopop-web/lib/components";
import { useLoaderData } from "react-router-dom";

const Test = () => {
  const { response } = useLoaderData();
  console.log("🚀 ~ file: Test.jsx:8 ~ Test ~ contacts:", response);
  return (
    <>
      <div className="h-10 w-10 rounded-full">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button
          className="text-sm font-medium text-gray-900"
          variant="primary"
          kind="elevated"
          size="big"
          colorMode="light"
          onClick={() => {
            console.log("I'm clicked");
          }}
        >
          Primary
        </Button>
        <Button
          variant="primary"
          kind="elevated"
          size="big"
          colorMode="dark"
          onClick={() => {
            console.log("I'm clicked");
          }}
        >
          Primary
        </Button>

        <Button
          colorMode="light"
          kind="elevated"
          onClick={function noRefCheck() {}}
          size="medium"
        >
          Try me
        </Button>
        <button>click</button>
      </div>
    </>
  );
};

export default Test;
