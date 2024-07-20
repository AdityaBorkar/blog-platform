## Links

- Google’s Disavow Links Tool - Not integrated inside due to it's very rare use case.

## Anchors

- All Anchors Summary: GoogleApi.ContentWarehouse.V1.Model.Anchors
    - homepageAnchorsDropped
    - localAnchorsDropped
    - nonlocalAnchorsDropped
    - redundantAnchorsDropped
    - supplementalAnchorsDropped
    - TODO: GoogleApi.ContentWarehouse.V1.Model.IndexingDocjoinerAnchorStatistics
- Anchor Information: GoogleApi.ContentWarehouse.V1.Model.AnchorsAnchor
    - URL
    - URL Fragment
    - Font Size
    - Creation Date
    - Source Quality: LOW / MEDIUM / HIGH / FRESHDOCS (equal to HIGH)
    - `Page Rank` Weight
    - locality: For ranking purposes, the quality of an anchor is measured by its "locality" and "bucket". See quality/anchors/definitions.h for more information.
    - Is Local (internal) Link?
    - parallelLinks: The number of additional links from the same source page to the same target domain. Not populated if is_local is true.
    - text: Space-delimited anchor words
    - `catfishTags`
    - linkTags 
    - context
    - `additional information`: GoogleApi.ContentWarehouse.V1.Model.Proto2BridgeMessageSet
    - encodedNewsAnchorData: if link is a news article
    - compressedImageUrls
- Additionals:
    - GoogleApi.ContentWarehouse.V1.Model.IndexingDocjoinerAnchorTrustedInfo.html
    - GoogleApi.ContentWarehouse.V1.Model.IndexingDocjoinerAnchorSpamInfo.html
    - spam anchors count
    - spamScore
- GoogleApi.ContentWarehouse.V1.Model.IndexingDocjoinerAnchorStatisticsPerDupStats.html
    - Redirecting anchors (including canonicals)
- AnchorsRedundantAnchorInfo: redundantanchorinfo 


- GoogleApi.ContentWarehouse.V1.Model.AnchorsAnchorSource
- GoogleApi.ContentWarehouse.V1.Model.ScienceCitation
- GoogleApi.ContentWarehouse.V1.Model.ScienceCitationAnchor
- GoogleApi.ContentWarehouse.V1.Model.SocialCommonLinkData
- GoogleApi.ContentWarehouse.V1.Model.QualityTravelGoodSitesData

- GoogleApi.ContentWarehouse.V1.Model.IndexingDocjoinerAnchorStatistics
- GoogleApi.ContentWarehouse.V1.Model.IndexingDocjoinerAnchorStatisticsPerDupStats
- GoogleApi.ContentWarehouse.V1.Model.IndexingDocjoinerAnchorStatisticsRedundantAnchorInfo

- GoogleApi.ContentWarehouse.V1.Model.IndexingDupsLocalizedLocalizedCluster
- GoogleApi.ContentWarehouse.V1.Model.IndexingDupsLocalizedLocalizedClusterTargetLinkLinkAnnotationSourceInfo

- GoogleApi.ContentWarehouse.V1.Model.RepositoryWebrefEntityNameScore
- GoogleApi.ContentWarehouse.V1.Model.RepositoryWebrefMention
- GoogleApi.ContentWarehouse.V1.Model.RepositoryWebrefDocumentMetadata
- GoogleApi.ContentWarehouse.V1.Model.RepositoryWebrefSimplifiedAnchor
- GoogleApi.ContentWarehouse.V1.Model.RepositoryWebrefSimplifiedCompositeDoc
- GoogleApi.ContentWarehouse.V1.Model.RepositoryWebrefEntityAnnotations
- GoogleApi.ContentWarehouse.V1.Model.RepositoryWebrefSubSegmentIndex
https://hexdocs.pm/google_api_content_warehouse/0.4.0/search.html?q=webref
https://hexdocs.pm/google_api_content_warehouse/0.4.0/search.html?q=link

- GoogleApi.ContentWarehouse.V1.Model.PerDocData
- GoogleApi.ContentWarehouse.V1.Model.CompositeDoc
- GoogleApi.ContentWarehouse.V1.Model.CompositeDocForwardingDup
- GoogleApi.ContentWarehouse.V1.Model.CompressedQualitySignals
- GoogleApi.ContentWarehouse.V1.Model.QualitySalientTermsSalientTerm
- GoogleApi.ContentWarehouse.V1.Model.GeostoreFeatureProto
