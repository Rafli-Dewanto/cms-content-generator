export type Content = {
  content: string | null;
  created_at: string | null;
  id: string;
  puck_config: string | null;
  status: boolean | null;
  title: string;
  updated_at: string | null;
  url_key: string | null;
  user_id: string | null;
};

export type CreateContentProps = {
  title: string;
  html: string;
  urlKey: string;
  active: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cookies: Record<string, any>;
  puckConf: string;
};
