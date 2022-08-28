export function getSubmitEntries(event: project.SubmitEvent) {
  event.stopPropagation();
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  return Array.from(data.entries());
}
