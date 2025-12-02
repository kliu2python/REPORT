import mongoose from 'mongoose';

const aiUsageSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
    provider: { type: String, required: true },
    tokensUsed: { type: Number, default: 0 },
    success: { type: Boolean, default: true },
    notes: String
  },
  { _id: false, timestamps: true }
);

const testCaseSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    task: { type: String, required: true },
    owner: String,
    rc1: String,
    rc2: String,
    rc3: String,
    rc4: String,
    rc5: String,
    rc6: String,
    mantis: String,
    notes: String
  },
  { timestamps: true }
);

const releaseSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    name: { type: String, required: true },
    version: { type: String, required: true },
    status: { type: String, default: 'draft' },
    aiUsage: [aiUsageSchema],
    testCases: [testCaseSchema],
    summary: {
      passRate: Number,
      blockers: [String],
      qualityNotes: String
    }
  },
  { timestamps: true }
);

export const Release = mongoose.model('Release', releaseSchema);
