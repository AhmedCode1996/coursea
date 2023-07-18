import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ecjspuiyvltoehmetasy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjanNwdWl5dmx0b2VobWV0YXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1NjI0MDQsImV4cCI6MjAwNTEzODQwNH0.epdhxRLFK8mOC66xwr4TJ12KP1YBCEkLKPfof4Cy7zU";

export const supabase = createClient(supabaseUrl, supabaseKey);
