import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      email,
      message,
    }: {
      name: string;
      phone: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      await actor.submitInquiry(name, phone, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
