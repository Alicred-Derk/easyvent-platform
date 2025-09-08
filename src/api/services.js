const getPublishedServices = async () => {
  const res = await fetch("http://localhost/ems-platform/services/publishServices.php");

  const json = await res.json();

  const { data } = json;

  if (!data) return [];

  const parsedServices = data.services.map((service) => ({
    ...service,
    amenities: JSON.parse(service.amenities ?? "[]"),
    highlights: JSON.parse(service.highlights ?? "[]"),
    images_url: JSON.parse(service.images_url ?? "[]"),
    packages_list: JSON.parse(service.packages_list ?? "[]"),
    location: JSON.parse(service.location ?? "{}"),
  }));

  return parsedServices ?? [];
};

const getServiceData = async (id) => {
  const formData = new FormData();

  formData.append("id", id);

  const res = await fetch("http://localhost/ems-platform/services/service.php", {
    method: "POST",
    body: formData,
  });

  const json = await res.json();

  const { data = {} } = json;

  if (!data.service) return {};

  const { service = {} } = data;

  const parsedService = {
    ...service,
    amenities: JSON.parse(service.amenities ?? "[]"),
    highlights: JSON.parse(service.highlights ?? "[]"),
    images_url: JSON.parse(service.images_url ?? "[]"),
    packages_list: JSON.parse(service.packages_list ?? "[]"),
    location: JSON.parse(service.location ?? "{}"),
  }

  return parsedService;
};

export { getPublishedServices, getServiceData };