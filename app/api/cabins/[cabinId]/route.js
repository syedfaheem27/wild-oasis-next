import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(_, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({
      message: "The cabin you requested does not exist!",
    });
  }
}
