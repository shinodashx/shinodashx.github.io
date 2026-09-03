// Edit this file to update profile links and publications.
window.SITE_CONTENT = {
  profile: {
    email: "1323827835@qq.com",
    github: "https://github.com/shinodashx"
  },
  publications: [
    {
      order: 1,
      venue: "ACM TOG 2026",
      title: "CADRec: Reconstructing a CAD Sequence Recursively with Localized Geometric Contexts",
      authors: "Haoxuan Song et al.",
      note: "SIGGRAPH Asia 2026",
      image: "assets/publications/cadrec.svg",
      imageAlt: "CADRec examples and its recursive, localized CAD reconstruction process.",
      abstract: "We present CADRec, a recursive CAD sequence reconstruction framework based on a hierarchically defined CAD DSL. This method addresses two limitations of previous methods. First, the flat, lengthy script representation of LLM-based reconstruction methods hinders generalization and does not take into account the reuse of code snippets. Second, existing one-shot and iterative geometric context encodings lack the structural clues necessary to accurately localize the geometric context for subsequent sequence reconstruction. CADRec recursively decomposes the input shape into spatially localized parts and reconstructs each part with a local CADQuery program based on a hierarchical CAD DSL. At each node of the hierarchy, the model decides whether to further split the current part into child parts or stop and synthesize its leaf-level CAD script. The generated local programs are then mapped back to the global coordinate frame and composed into the final CAD model. This hierarchical formulation turns global CAD reconstruction into a sequence of simpler local part prediction problems, reducing geometric complexity while preserving the structural organization of the design. To support this process, we encode localized point-cloud context and use an MLLM-based decoder to predict decomposition decisions and CAD programs. We further train the model with geometry-aware objectives that encourage consistent part decomposition and spatially grounded predictions. Experiments on standard CAD reconstruction benchmarks demonstrate that CADRec improves both geometric fidelity and program validity over prior sequence- and code-based baselines. Notably, when trained on the limited DeepCAD dataset and tested on the unseen Fusion360 set, our method reduces mean CD, median CD, and IR by 85.8%, 67.2%, and 92.3%, respectively.",
      links: [
        { label: "Code & Data", url: "https://github.com/shinodashx/CADRec" }
      ]
    },
    {
      order: 2,
      venue: "Under Review",
      title: "BRepDSN: A Dual-stream Network Design for B-Rep Representation Learning Leveraging the Duality of Face and Boundary Vertices",
      authors: "Haoxuan Song et al.",
      image: "assets/publications/brepdsn.svg",
      imageAlt: "BRepDSN boundary-representation examples showing face and boundary-vertex structures.",
      links: []
    },
    {
      order: 4,
      venue: "ICCAD 2026",
      title: "QuantizeHeat: Generalizable Thermal Prediction for 2.5D Chiplets via Thermal-Aware Discrete Latent Space Mapping",
      authors: "Ze Hao, Yu Zhang, Haoxuan Song, Tianyu Liang, Yijun Chen, Kang Zhao, Jianwang Zhai",
      image: "assets/publications/quantizeheat.svg",
      imageAlt: "The two-stage QuantizeHeat architecture for thermal-aware latent-space construction and multi-physics feature mapping.",
      abstract: "As advanced packaging emerges as a mainstream paradigm for alleviating the performance bottlenecks of integrated circuits, 2.5D chiplet-based heterogeneous integration substantially increases the complexity of thermal simulation. Traditional solvers based on the finite-element method or thermal RC network often face a trade-off between accuracy and computational efficiency. Existing learning-based approaches lack generalization across material and floorplan variations. In this work, we propose QuantizeHeat, the first to introduce Vector Quantization (VQ) into thermal prediction for heterogeneous 2.5D chiplets, with physics-informed neural network (PINN) constraints for constructing a physically interpretable Thermal-Aware Discrete Latent Space. Leveraging transfer learning, QuantizeHeat can adapt to unseen stack-up configurations with only a small number of samples. Experimental results demonstrate that QuantizeHeat achieves state-of-the-art accuracy and strong generalization. Relative to COMSOL ground truth, our method achieves an MAE below 0.03 °C, with over 6,600× and 38,000× speedups on the 4- and 16-chiplet datasets, respectively.",
      links: []
    },
    {
      order: 3,
      venue: "arXiv 2025",
      title: "VRSketch2Gaussian: 3D VR Sketch Guided 3D Object Generation with Gaussian Splatting",
      authors: "Songen Gu, Haoxuan Song, Binjie Liu, Qian Yu, Sanyi Zhang, Haiyong Jiang, Jin Huang, Feng Tian",
      image: "assets/publications/vrsketch2gaussian.svg",
      imageAlt: "VRSketch2Gaussian pipeline from VR sketching and text guidance to a generated 3D Gaussian object.",
      abstract: "We propose VRSketch2Gaussian, the first VR sketch-guided, multimodal, native-3D object generation framework that incorporates the 3D Gaussian Splatting (3DGS) representation. As part of our work, we introduce VRSS, the first large-scale paired dataset containing VR sketches, text descriptions, images, and 3DGS representations, bridging the gap in multimodal VR sketch-based generation. Our approach features three key innovations. First, a two-stage sketch–CLIP alignment strategy bridges the domain gap between sparse VR sketch embeddings and rich CLIP embeddings through contrastive learning, facilitating both retrieval and generation. Second, fine-grained multimodal conditioning disentangles generation by using explicit VR sketches for geometry and text descriptions for appearance, enabled by a Perceiver-based reducer that preserves spatial information while maintaining computational efficiency. Third, native-3D generation with appearance–geometry joint refinement produces high-quality 3D Gaussian models with fine geometric control and visual fidelity. Experiments on VRSS demonstrate superior performance in VR sketch-guided 3D generation compared with existing approaches.",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2503.12383" }
      ]
    },
    {
      order: 5,
      venue: "NeurIPS 2025",
      title: "SegGraph: Leveraging Graphs of SAM Segments for Few-Shot 3D Part Segmentation",
      authors: "Yueyang Hu, Haiyong Jiang, Haoxuan Song, Jun Xiao, Hao Pan",
      image: "assets/publications/seggraph.svg",
      imageAlt: "SegGraph pipeline using multi-view rendering, SAM segment graphs, graph propagation, and 3D part prediction.",
      abstract: "Recent advances have demonstrated the significant potential of 2D foundation models for low-shot 3D part segmentation. However, effectively aggregating their 2D knowledge into 3D remains an open problem. We propose SegGraph, a SAM segment graph-based propagation method that explicitly learns geometric features encoded within SAM segmentation masks. The method models overlap and adjacency between segments while preserving intra-segment semantic consistency. Each graph node adaptively modulates 2D foundation-model features, which are propagated through a graph neural network to learn global geometric structure. A view-direction-weighted fusion then maps segment features to 3D points while attenuating low-quality segments. Experiments on PartNet-E show that SegGraph outperforms all competing baselines by at least 6.9% mIoU, with particularly strong performance on small components and part boundaries.",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2512.16143" },
        { label: "Code", url: "https://github.com/YueyangHu2000/SegGraph" }
      ]
    },
    {
      order: 6,
      venue: "CVPR 2025",
      title: "D³CTTA: Domain-Dependent Decorrelation for Continual Test-Time Adaption of 3D LiDAR Segmentation",
      authors: "Jichun Zhao, Haiyong Jiang, Haoxuan Song, Jun Xiao, Dong Gong",
      image: "assets/publications/d3ctta.svg",
      imageAlt: "D3CTTA architecture combining distance-aware prototypes with domain-specific feature decorrelation.",
      abstract: "Adapting pre-trained LiDAR segmentation models to dynamic domain shifts during testing is of paramount importance for the safety of autonomous driving. Most existing methods neglect the influence of domain changes and point density in continual test-time adaption (CTTA), relying on backpropagation and large batch sizes for stability. We approach this problem with three insights: point clouds at different distances usually have different densities, resulting in distribution disparities; feature distributions vary across domains, and domain-aware parameters can alleviate domain gaps; and highly correlated features make segmentation of different labels confusing. To this end, we present D³CTTA, an online backpropagation-free framework for continual test-time adaptation of 3D LiDAR segmentation. D³CTTA consists of a distance-aware prototype learning module that integrates LiDAR geometry priors and a domain-dependent decorrelation module that reduces feature correlations across domains and categories. Extensive experiments on three benchmarks demonstrate state-of-the-art performance compared with both backpropagation-based and backpropagation-free methods.",
      links: [
        { label: "Paper", url: "https://openaccess.thecvf.com/content/CVPR2025/html/Zhao_D3CTTA_Domain-Dependent_Decorrelation_for_Continual_Test-Time_Adaption_of_3D_LiDAR_CVPR_2025_paper.html" },
        { label: "Code", url: "https://github.com/ZhaoJichun1/D3CTTA" }
      ]
    }
  ]
};
