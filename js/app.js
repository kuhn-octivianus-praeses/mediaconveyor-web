// MediaConveyor Portfolio & GitHub Resources App Script
document.addEventListener('DOMContentLoaded', () => {

  // GitHub Repositories Dataset
  const repositories = [
    {
      id: 'mediaconveyor-core',
      name: 'mediaconveyor/core-engine',
      category: 'core',
      description: 'High-throughput, event-driven media processing engine built in Rust. Handles asynchronous chunking, pipeline routing, and queue orchestration.',
      language: 'Rust',
      langClass: 'lang-rust',
      stars: 1240,
      forks: 184,
      license: 'Apache-2.0',
      tags: ['rust', 'pipeline', 'media-processing', 'async', 'hls'],
      cloneCmd: 'git clone https://github.com/mediaconveyor/core-engine.git',
      quickStart: `// Cargo.toml
[dependencies]
mediaconveyor-core = "2.4.0"

// main.rs
use mediaconveyor_core::pipeline::PipelineBuilder;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let pipeline = PipelineBuilder::new()
        .enable_gpu_accel(true)
        .add_stage("transcode_hls")
        .add_stage("ai_thumbnail_extract")
        .build()?;

    pipeline.convey("s3://input-bucket/video.mp4").await?;
    Ok(())
}`
    },
    {
      id: 'mediaconveyor-ffmpeg',
      name: 'mediaconveyor/ffmpeg-worker',
      category: 'core',
      description: 'Distributed containerized FFmpeg transcode worker with NVENC/VAAPI hardware acceleration support and sub-second chunk segmentation.',
      language: 'Go',
      langClass: 'lang-go',
      stars: 890,
      forks: 112,
      license: 'MIT',
      tags: ['ffmpeg', 'go', 'gpu-nvenc', 'transcoding', 'docker'],
      cloneCmd: 'git clone https://github.com/mediaconveyor/ffmpeg-worker.git',
      quickStart: `package main

import (
	"context"
	"github.com/mediaconveyor/ffmpeg-worker/worker"
)

func main() {
	w := worker.NewWorker(&worker.Config{
		MaxParallelJobs: 8,
		HWAccel:         "cuda",
	})
	w.Start(context.Background())
}`
    },
    {
      id: 'mediaconveyor-node-sdk',
      name: 'mediaconveyor/node-sdk',
      category: 'sdks',
      description: 'Official TypeScript / Node.js client SDK for managing conveyor pipelines, listening to webhooks, and triggering batch transcoding jobs.',
      language: 'TypeScript',
      langClass: 'lang-ts',
      stars: 650,
      forks: 78,
      license: 'MIT',
      tags: ['typescript', 'nodejs', 'sdk', 'webhooks', 'api-client'],
      cloneCmd: 'npm install @mediaconveyor/sdk',
      quickStart: `import { MediaConveyor } from '@mediaconveyor/sdk';

const client = new MediaConveyor({ apiKey: process.env.CONVEYOR_KEY });

const job = await client.pipelines.trigger({
  inputUrl: 'https://cdn.example.com/raw-raw.mov',
  profiles: ['1080p_h264', '720p_hevc', 'audio_aac'],
  webhookUrl: 'https://api.myapp.com/webhooks/media'
});

console.log('Conveyor Job ID:', job.id);`
    },
    {
      id: 'mediaconveyor-cli',
      name: 'mediaconveyor-cli',
      category: 'cli',
      description: 'Command line utility to test pipelines locally, inspect media metadata, manage remote worker nodes, and tail live encoding logs.',
      language: 'Go',
      langClass: 'lang-go',
      stars: 430,
      forks: 45,
      license: 'Apache-2.0',
      tags: ['cli', 'devtools', 'terminal', 'diagnostics'],
      cloneCmd: 'go install github.com/mediaconveyor/cli@latest',
      quickStart: `# Test pipeline execution locally
mediaconveyor run --config pipeline.yaml --input sample.mkv

# Tail encoding status
mediaconveyor logs --job job_8f92ab41 --follow`
    },
    {
      id: 'mediaconveyor-python-sdk',
      name: 'mediaconveyor-python',
      category: 'sdks',
      description: 'Python client and AI vision plugin for object detection, automated subtitle extraction (Whisper), and frame analysis in conveyor workflows.',
      language: 'Python',
      langClass: 'lang-python',
      stars: 520,
      forks: 64,
      license: 'MIT',
      tags: ['python', 'ai-tagging', 'whisper-subtitles', 'computer-vision'],
      cloneCmd: 'pip install mediaconveyor-ai',
      quickStart: `from mediaconveyor import Pipeline, AITagger

pipeline = Pipeline.from_env()
tagger = AITagger(model="yolov8-media")

@pipeline.on_stage("process")
def analyze_frames(chunk):
    tags = tagger.detect_scenes(chunk)
    return {"detected_labels": tags}`
    },
    {
      id: 'mediaconveyor-helm',
      name: 'mediaconveyor/k8s-operator',
      category: 'infra',
      description: 'Kubernetes Operator & Helm charts for auto-scaling MediaConveyor worker pools dynamically based on queue depth and GPU metrics.',
      language: 'Docker',
      langClass: 'lang-docker',
      stars: 310,
      forks: 38,
      license: 'Apache-2.0',
      tags: ['kubernetes', 'helm', 'k8s-operator', 'autoscaling', 'devops'],
      cloneCmd: 'helm repo add mediaconveyor https://charts.mediaconveyor.com',
      quickStart: `# Install MediaConveyor Operator via Helm
helm install conveyor-operator mediaconveyor/k8s-operator \\
  --namespace mediaconveyor-system \\
  --set gpuScaling.enabled=true`
    }
  ];

  // Pipeline Steps Data
  const pipelineSteps = {
    1: {
      title: '1. ART Resources',
      desc: 'Art Queues and AI driven art reviews through agentic fetching. Art work DevOps and monitezation',
      features: ['AI Images', 'Multi-part ART flows', 'AI Galleries', 'Automated NFT & Key Pair Authenticity checking'],
      codeHeader: 'ingest_config.json',
      code: `{
  "ingest_type": "s3_bucket_trigger",
  "source_bucket": "raw-media-intake",
  "allowed_codecs": ["h264", "hevc", "prores", "av1"],
  "checksum_verification": true,
  "chunk_size_mb": 16
}`
    },
    2: {
      title: '2. Hardware Setup',
      desc: 'Synology QuickSync NAC, and Apple VT GPU nodes. Automatically service CloudInit images, transposes profiles, and generates adaptive HCL Terraform artifacts.',
      features: ['Multi-pass 4K 60FPS video encoding', 'Parallel micro-chunk segmentation', 'AV1, HEVC, H.264, VP9 support', 'Per-title bitrate optimization (VMAF)'],
      codeHeader: 'transcode_profile.yaml',
      code: `version: "2.4"
profile: "kuhn_hls"
hardware_accel: "Apple M4 32-cores GPU, 16-cores Neural Engine"
outputs:
  - resolution: "3840x2160"
    bitrate: "12000k"
    codec: "hevc"
  - resolution: "1920x1080"
    bitrate: "4500k"
    codec: "h264"`
    },
    3: {
      title: '3. AI Analysis & Processing',
      desc: 'Real-time extraction of metadata, automated infra and VMs, intelligent scene change detection, thumbnail prompting generation, and agentic tasks.',
      features: ['Automated synthesis', 'Automated Personalization Builds', 'Keyframe & storyboard sprite generator', 'Security classification filter'],
      codeHeader: 'ai_processor.py',
      code: `@conveyor.stage("ai_enrichment")
def extract_metadata(media_chunk):
    subtitles = whisper.transcribe(media_chunk.audio)
    storyboard = vision.create_sprite(media_chunk.video, interval=2)
    return {
        "subtitles": subtitles,
        "storyboard_url": storyboard.url
    }`
    },
    4: {
      title: '4. Travels and Opinions',
      desc: 'Gathered resouces, awesome links collection, TUI dev, and much more',
      features: ['Containers, K8S, DEV', 'Bookmarked URL generation', 'Opinions and blogs', 'Travels'],
      codeHeader: 'dispatch_event.json',
      code: `{
  "event": "conveyor.job.completed",
  "job_id": "job_99a8b1c4",
  "duration_ms": 1420,
  "hls_manifest": "https://bing.com",
  "vmaf_score": 96.4
}`
    }
  };

  // Render Repositories
  const reposGrid = document.getElementById('repos-grid');
  const searchInput = document.getElementById('search-input');
  const filterPills = document.querySelectorAll('.filter-pill');
  let currentCategory = 'all';

  function renderRepositories() {
    if (!reposGrid) return;
    
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = repositories.filter(repo => {
      const matchCategory = currentCategory === 'all' || repo.category === currentCategory;
      const matchQuery = repo.name.toLowerCase().includes(query) || 
                         repo.description.toLowerCase().includes(query) ||
                         repo.tags.some(t => t.toLowerCase().includes(query)) ||
                         repo.language.toLowerCase().includes(query);
      return matchCategory && matchQuery;
    });

    if (filtered.length === 0) {
      reposGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;" class="glass-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">No repositories found</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Try adjusting your search query or filter category.</p>
        </div>
      `;
      return;
    }

    reposGrid.innerHTML = filtered.map(repo => `
      <div class="glass-card repo-card">
        <div>
          <div class="repo-header">
            <div class="repo-title-group">
              <svg class="repo-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              <a href="https://github.com/${repo.name}" target="_blank" rel="noopener noreferrer" class="repo-title">${repo.name}</a>
            </div>
            <span class="repo-visibility">Public</span>
          </div>

          <p class="repo-desc">${repo.description}</p>

          <div class="repo-tags">
            ${repo.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
          </div>
        </div>

        <div class="repo-footer">
          <div class="repo-meta">
            <span class="meta-item">
              <span class="lang-dot ${repo.langClass}"></span>
              ${repo.language}
            </span>
            <span class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ${repo.stars}
            </span>
            <span class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>
              ${repo.forks}
            </span>
          </div>

          <div class="repo-actions">
            <button class="btn btn-glass btn-sm quick-view-btn" data-id="${repo.id}">
              Quick Code
            </button>
            <button class="btn btn-glass btn-sm copy-cmd-btn" data-cmd="${repo.cloneCmd}" title="Copy clone command">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach Event Listeners to newly rendered dynamic buttons
    document.querySelectorAll('.copy-cmd-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cmd = e.currentTarget.getAttribute('data-cmd');
        copyToClipboard(cmd, 'Clone command copied to clipboard!');
      });
    });

    document.querySelectorAll('.quick-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const repoId = e.currentTarget.getAttribute('data-id');
        openRepoModal(repoId);
      });
    });
  }

  // Filter Pills Event Handler
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');
      renderRepositories();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', renderRepositories);
  }

  // Pipeline Steps Interactive Handler
  const stepNodes = document.querySelectorAll('.pipeline-step-node');
  const pipelineInfoContainer = document.getElementById('pipeline-info');
  const pipelineCodeHeader = document.getElementById('pipeline-code-header');
  const pipelineCodeBody = document.getElementById('pipeline-code-body');
  const pipelineCopyBtn = document.getElementById('pipeline-copy-btn');

  function updatePipelineStep(stepId) {
    const data = pipelineSteps[stepId];
    if (!data) return;

    stepNodes.forEach(node => {
      if (node.getAttribute('data-step') === String(stepId)) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });

    if (pipelineInfoContainer) {
      pipelineInfoContainer.innerHTML = `
        <h4>${data.title}</h4>
        <p>${data.desc}</p>
        <ul class="feature-list">
          ${data.features.map(f => `
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              ${f}
            </li>
          `).join('')}
        </ul>
      `;
    }

    if (pipelineCodeHeader) pipelineCodeHeader.textContent = data.codeHeader;
    if (pipelineCodeBody) pipelineCodeBody.textContent = data.code;
  }

  stepNodes.forEach(node => {
    node.addEventListener('click', () => {
      const step = node.getAttribute('data-step');
      updatePipelineStep(step);
    });
  });

  if (pipelineCopyBtn && pipelineCodeBody) {
    pipelineCopyBtn.addEventListener('click', () => {
      copyToClipboard(pipelineCodeBody.textContent, 'Pipeline configuration copied!');
    });
  }

  // Modal Dialog Logic
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalCode = document.getElementById('modal-code');
  const modalClose = document.getElementById('modal-close');
  const modalCopyBtn = document.getElementById('modal-copy-btn');
  const modalGithubLink = document.getElementById('modal-github-link');

  function openRepoModal(repoId) {
    const repo = repositories.find(r => r.id === repoId);
    if (!repo || !modalOverlay) return;

    modalTitle.textContent = repo.name;
    modalDesc.textContent = repo.description;
    modalCode.textContent = repo.quickStart;
    modalGithubLink.href = `https://github.com/${repo.name}`;

    modalOverlay.classList.add('active');
  }

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  if (modalCopyBtn && modalCode) {
    modalCopyBtn.addEventListener('click', () => {
      copyToClipboard(modalCode.textContent, 'Code snippet copied to clipboard!');
    });
  }

  // Copy to Clipboard Toast Utility
  function copyToClipboard(text, message = 'Copied to clipboard!') {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <span>${message}</span>
    `;

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Global Code Box Copy Handler
  document.querySelectorAll('.copy-code-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const codeBlock = e.currentTarget.closest('.code-box').querySelector('.code-body');
      if (codeBlock) {
        copyToClipboard(codeBlock.textContent, 'Code copied to clipboard!');
      }
    });
  });

  // Initial Render
  renderRepositories();
  updatePipelineStep(1);
});
