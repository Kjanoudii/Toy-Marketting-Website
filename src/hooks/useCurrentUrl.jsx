
import { useUrl } from "nextjs-current-url";

function useCurrentUrl() {
  const { href: currentUrl, pathname } = useUrl() ?? {};
  const url = `${currentUrl}`.toString();

  return url;
}

export default useCurrentUrl;
