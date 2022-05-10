import Http from "./http";

const MailerAPI = {
  sendToMailer: async (data: {
    email: string;
    text: string;
    name: string;
  }): Promise<any> => {
    const instance = Http.Public;

    try {
      const response = await instance.post("/api/send-email", data);
      return response.data;
    } catch (error) {
      return { status: "error", message: error };
    }
  },
};

export default MailerAPI;
