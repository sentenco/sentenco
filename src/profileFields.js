// Shared bits for the profile "age and years teaching" line.

export function ageYearsLine(age, years) {
  const a = age === null || age === undefined || age === "" ? "" : `${age} years old`;
  const y = years === null || years === undefined || years === "" ? "" : (Number(years) < 1 ? "New to teaching" : `${years} ${Number(years) === 1 ? "year" : "years"} teaching`);
  return [a, y].filter(Boolean).join(" · ");
}

// age exists once sql/add_profile_chips.sql has been run; ask for it, and quietly retry without it if the column is missing.
export async function fetchOwnProfile(supabase, id, cols) {
  let { data, error } = await supabase.from("profiles").select(`${cols}, age`).eq("id", id).maybeSingle();
  if (error) ({ data } = await supabase.from("profiles").select(cols).eq("id", id).maybeSingle());
  return data;
}
