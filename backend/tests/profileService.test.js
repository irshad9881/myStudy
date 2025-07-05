const { updateUserProfileService } = require("../services/profileService");
const User = require("../models/user");
const Profile = require("../models/profile");

jest.mock("../models/user");
jest.mock("../models/profile");

describe("updateUserProfileService Service", () => {
  it("should update user and profile successfully", async () => {
    const mockUser = {
      firstName: "",
      lastName: "",
      save: jest.fn(),
      additionalDetails: "profile123",
    };

    const mockProfile = {
      gender: "",
      dateOfBirth: "",
      about: "",
      contactNumber: "",
      save: jest.fn(),
    };

    const mockPopulatedUser = {
      ...mockUser,
      populate: jest.fn().mockResolvedValue({
        ...mockUser,
        additionalDetails: { gender: "Male", about: "Test" },
      }),
    };

    // First call: return mockUser
    // Second call: return an object with .populate()
    User.findById
      .mockResolvedValueOnce(mockUser) // initial user fetch
      .mockReturnValueOnce(mockPopulatedUser); // for populate chaining

    Profile.findById.mockResolvedValue(mockProfile);

    const result = await updateUserProfileService({
      userId: "user123",
      profileData: {
        firstName: "John",
        lastName: "Doe",
        gender: "Male",
        dateOfBirth: "1990-01-01",
        about: "Test",
        contactNumber: "1234567890",
      },
    });

    expect(User.findById).toHaveBeenCalledTimes(2);
    expect(Profile.findById).toHaveBeenCalledWith("profile123");
    expect(mockUser.save).toHaveBeenCalled();
    expect(mockProfile.save).toHaveBeenCalled();
    expect(result).toBeDefined();
  });
});
